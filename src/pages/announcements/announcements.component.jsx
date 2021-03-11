import React from 'react';

import { Route } from 'react-router-dom';
import OfficialAnnouncement from '../../components/official-announcment-list/official-announcement.component';
import AnnoucementFullView from '../../components/annoucement-full-view/annoucement-full-view.component';

const Announcements = ({ match }) => {
    return (
        <React.Fragment>
            <Route exact path={`${match.path}`} component={OfficialAnnouncement}/>
            <Route path={`${match.path}/:newsId`} component={AnnoucementFullView}/>
        </React.Fragment>
    )
}

export default Announcements;