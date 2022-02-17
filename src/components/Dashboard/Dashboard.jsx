import classes from './Dashboard.module.css'
import GameBlock from './GameBlock/GameBlock';
import LevelBlock from './LevelBlock/LevelBlock';
import PointsBlock from './PointsBlock/PointsBlock';

const Dashboard = () => {
    return (
        <section className={classes.dashboardContainer}>
            <GameBlock/>
            <PointsBlock/>
            <LevelBlock/>
        </section>
    )
}

export default Dashboard;