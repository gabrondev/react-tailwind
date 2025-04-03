import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaTitulo() {
    return (
        <Pagina>
            <div className="p-10">
                <Titulo principal="Dashboard" secundario="Informações sobre a sua conta" gradiente />
            </div>
        </Pagina>
    )
}