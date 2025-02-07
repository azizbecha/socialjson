"use client"

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const NextProgress = () => (
    <ProgressBar
        height="5px"
        color="#fff"
        options={{ showSpinner: true }}
        shallowRouting
    />
)