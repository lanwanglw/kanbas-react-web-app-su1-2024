import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
    let { id } = useParams();

    if (id !== "1") {
        return <div>Not Available</div>;
    }

    return (
        <div id="wd-assignments-editor" style={{ padding: '20px' }}>
            <div style={{marginBottom: '20px'}}>
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" value="A1 - ENV + HTML" readOnly style={{ width: '100%' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <textarea id="wd-description" defaultValue={`The assignment is available online
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`} readOnly style={{ width: '150%', height: '150px' }}></textarea>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-points">Points</label>
                <input id="wd-points" value="100" readOnly style={{ width: '100%' }}/>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-group">Assignment Group</label>
                <select id="wd-group" style={{ width: '100%' }}>
                    <option value="assignments">ASSIGNMENTS</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
                <select id="wd-display-grade-as" style={{ width: '100%' }}>
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter</option>
                    <option value="combination">Combination</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-submission-type">Submission Type</label>
                <select id="wd-submission-type" style={{ width: '100%' }}>
                    <option value="online">Online</option>
                </select>
            </div>

            <fieldset style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
                <legend>Online Entry Options</legend>
                <label htmlFor="wd-text-entry"><input type="checkbox" name="Online Entry Options-option" id="wd-text-entry" /> Text Entry</label><br/>
                <label htmlFor="wd-website-url"><input type="checkbox" name="Online Entry Options-option" id="wd-website-url" /> Website URL</label><br/>
                <label htmlFor="wd-media-recordings"><input type="checkbox" name="Online Entry Options-option" id="wd-media-recordings" /> Media Recordings</label><br/>
                <label htmlFor="wd-student-annotation"><input type="checkbox" name="Online Entry Options-option" id="wd-student-annotation" /> Student Annotation</label><br/>
                <label htmlFor="wd-file-upload"><input type="checkbox" name="Online Entry Options-option" id="wd-file-upload" /> File Uploads</label>
            </fieldset>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-assign-to">Assign To</label>
                <input id="wd-assign-to" defaultValue="Everyone" style={{ width: '100%' }}/>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-due-date">Due Date</label>
                <input id="wd-due-date" type="date" defaultValue="2024-05-13" style={{ width: '100%' }}/>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-available-from">Available From</label>
                <input id="wd-available-from" type="date" defaultValue="2024-05-06" style={{ width: '100%' }}/>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="wd-available-until">Until</label>
                <input id="wd-available-until" type="date" defaultValue="2024-05-20" style={{ width: '100%' }}/>
            </div>

            <div style={{ textAlign: 'right' }}>
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>
        </div>
    );
}