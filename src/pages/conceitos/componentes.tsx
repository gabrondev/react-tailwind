import Pagina from "@/components/template/Pagina";

export default function Componentes() {
    return (
        <Pagina>
            <div className="flex-center h-screen gap-5">
                <button className="btn btn-info">Info</button>
                <button className="btn btn-success">Sucesso</button>
                <button className="btn btn-error">Erro</button>
            </div>
        </Pagina>
    )
}