import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import PerformanceMetrics from "../../components/PerformanceMetrics/PerformanceMetrics";
import Functionality from "../../components/Functionality/Functionality";

const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <PerformanceMetrics />
            <Functionality />
        </div>
    )
}

export default Dashboard;