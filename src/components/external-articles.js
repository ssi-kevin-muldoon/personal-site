import React from 'react'

import * as data from '../data'

export const ExternalArticles = () => (
    <div>
        <h3>External Articles</h3>

        <p>Articles and things I've written that are hosted elsewhere.</p>

        <ul>
            {data.externalArticles.map(({ url, title }, i) => (
                <li key={i}>
                    <h4>{title}</h4>
                    <p>
                        <a href={url} title={title}>
                            {url}
                        </a>
                    </p>
                </li>
            ))}
        </ul>
    </div>
)
