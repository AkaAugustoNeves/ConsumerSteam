class Jogo:
    def __init__(self, titulo: str, imgSrc: str, preco: float, ref: str):
        self.titulo = titulo
        self.imgSrc = imgSrc
        self.preco = preco
        self.ref = ref

    def __repr__(self):
        return f"Jogo(titulo={self.titulo}, imgSrc={self.imgSrc}, preco={self.preco})"

