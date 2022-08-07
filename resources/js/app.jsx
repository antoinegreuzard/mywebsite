import '../css/app.scss';

import React from "react";
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AOS from "aos";
import "aos/dist/aos.css";

// this for animation
AOS.init({
 duration: 1200,
});

createInertiaApp({
	id: 'app',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});
