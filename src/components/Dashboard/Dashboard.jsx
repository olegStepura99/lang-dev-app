import classes from './Dashboard.module.css'
import LibraryBlock from './LibraryBlock/LibraryBlock';
import LevelBlock from './LevelBlock/LevelBlock';
import PointsBlock from './PointsBlock/PointsBlock';

const Dashboard = () => {
    return (
        <section className={classes.dashboardContainer}>
            <LibraryBlock/>
            <PointsBlock/>
            <LevelBlock/>
        </section>
    )
}

export default Dashboard;