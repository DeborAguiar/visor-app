export interface Place {
    id: number;
    nome: string;
    open_at: string;
    resume: string;
    imagem: string;
}

export interface Item {
    id_museu: number;
    id_obra: number;
    name: string;
    year: number;
    artist: string;
    resume: string;
    img: string;
}