import React from 'react';

import styles from './sign-in-page.module.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage = () => (
    <div className={styles.signInPage}>
        <SignIn />
    </div>
);

export default SignInPage;