import Pagina from "@/components/template/Pagina";

export default function Pseudo() {
    return (
        <Pagina>
            <div className="flex justify-center items-center h-screen">
                <button className="
                    cursor-pointer p-2 rounded-md
                    bg-green-500 hover:bg-green-700
                    text-black hover:text-white
                ">
                    Salvar
                </button>
            </div>
        </Pagina>
    )
}