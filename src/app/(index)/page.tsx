import { ModernFeatures } from "../../components/ModernFeatures";
import { PageBanner } from "../../components/PageBanner";

export default function Home() {
    return (
        <div className="home-page">
            <PageBanner />
            <ModernFeatures />
        </div>
    );
}
