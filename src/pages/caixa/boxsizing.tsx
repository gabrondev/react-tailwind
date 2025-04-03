import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function BoxSizing() {
    return (
        <Pagina>
            <div className="flex flex-col gap-5">
                <Caixa className="w-36">#1</Caixa>
                {/* box-content */}
                <Caixa className="w-36 h-36 border-8 border-white box-content">#2</Caixa>
            </div>
        </Pagina>
    )
}