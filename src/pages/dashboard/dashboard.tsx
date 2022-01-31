import { Header, Content } from "@containers";
import { useDashaboard } from "@hooks";
import { useLayoutEffect } from "react";

export const Dashboard: React.FC = () => {
    const { fetchInvestments } = useDashaboard();

    useLayoutEffect(() => {
        const fetch = async () => {
            await fetchInvestments();
        };
        fetch();
    }, []);

    return (
        <main>
            <Header />
            <Content />
        </main>
    )
}