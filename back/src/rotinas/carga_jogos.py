from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time
from src.models.Jogo import Jogo

def main(): 
    navegador = abrirNavegador('https://store.steampowered.com/search/?filter=topsellers')
    jogos = getJogos(getPanelById(navegador, 'search_resultsRows'))
    return convertElementToJogo(jogos)


def abrirNavegador(link):
    servico = Service(ChromeDriverManager().install())
    navegador = webdriver.Chrome(service=servico)
    navegador.get(link)
    return navegador

def esperar(tempo):
    time.sleep(tempo)

def getPanelById(navegador, panelId):
    try:
        panel = navegador.find_element(By.ID, panelId)
        return panel
    except NoSuchElementException:
        print(f"Elemento com ID '{panelId}' não foi encontrado.")

def getJogos(panel):
    return panel.find_elements(By.TAG_NAME, 'a')

def convertElementToJogo(jogos):
    resultado = []
    for jogo in jogos:
        titulo = jogo.find_elements(By.CLASS_NAME, 'title')[0].text
        imgSrc = jogo.find_element(By.XPATH, './/div/img').get_attribute('src')
        preco = jogo.find_elements(By.CLASS_NAME, 'discount_final_price')[0].text
        ref = jogo.get_attribute("href")

        resultado.append(Jogo(titulo=titulo, imgSrc=imgSrc, preco=preco, ref= ref))
    return resultado

if __name__ == "__main__":
    main()