import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <Card title="Welcome" content="This is the home page card content." />
        </div>
    )
}