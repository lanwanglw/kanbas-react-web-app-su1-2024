export default function KanbasNavigation() {
    return (
        <ul id="wd-kanbas-navigation">
            <li>
                <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" rel="noopener noreferrer">
                    <img src="/images/NEU.png" alt="Northeastern University" width="100" />
                </a>
            </li>
            <li><a className="wd-link" href="#/Kanbas/Account" id="kanbas-account-link">Account</a></li>
            <li><a className="wd-link" href="#/Kanbas/Dashboard" id="kanbas-dashboard-link">Dashboard</a></li>
            <li><a className="wd-link" href="#/Kanbas/Courses" id="kanbas-courses-link">Courses</a></li>
            <li><a className="wd-link" href="#/Kanbas/Calendar" id="kanbas-calendar-link">Calendar</a></li>
            <li><a className="wd-link" href="#/Kanbas/Inbox" id="kanbas-inbox-link">Inbox</a></li>
            <li><a className="wd-link" href="#/Labs" id="kanbas-labs-link">Labs</a></li>
        </ul>
    );
}
