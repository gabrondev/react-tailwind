import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function Padding() {
    return (
        <Pagina>
            <div className="flex-center h-screen">
                <Caixa className="px-3">#1</Caixa>
                <Caixa className="py-5">#2</Caixa>
                <Caixa className="pb-4 pl-6">#3</Caixa>
                <Caixa className="p-5">#4</Caixa>
                <Caixa className="pt-[11px]">#5</Caixa>
            </div>
        </Pagina>
    )
}