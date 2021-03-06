import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';


import { ProfileContainer, ProfileName } from './profile.styles';

import { auth } from '../../firebase/firebase.utils';



const Profile = ({ currentUser }) => {

    const handleClick = () => {
        auth.signOut()
    }

    return (
        <div>
            {
                currentUser ?
                (
                    <ProfileContainer>
                        <CustomButton variant="contained" size='small' handleClick={handleClick}>
                            خروج
                        </CustomButton>
                        <ProfileName>{currentUser.displayName}</ProfileName>
                    </ProfileContainer>
                )
                :   
                <CustomButton variant='contained' color='secondary' component='link' to='/signin' size='medium'>
                    ورود
                </CustomButton>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Profile);