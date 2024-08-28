from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.rotinas.carga_jogos import main as executar_carga_jogos

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir estas origens
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

jogos = []

@app.get("/")
def hello():
    return {"API funcionando (👍￣︶￣)👍"}

@app.get("/rotina/start")
def rodarRotina():
    global jogos
    if len(jogos) == 0:
        jogos = executar_carga_jogos()
    return jogos