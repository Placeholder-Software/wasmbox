import React from 'react';

export const Discord = ({children}) => (
    <a href="https://discord.gg/3RtDa2M9Bx">{children ?? "Discord"}</a>
);

export const IssueTracker = ({children}) => (
    <a href="https://github.com/Placeholder-Software/wasmbox/issues">{children ?? "Issue Tracker"}</a>
);

export const AssetStore = ({children}) => (
    <a href="https://assetstore.unity.com/packages/slug/248818?aid=1100lJDF">{children ?? "Unity Asset Store"}</a>
);

export const Email = ({children}) => (
    <a href="mailto:admin@placeholder-software.co.uk">{children ?? "admin@placeholder-software.co.uk"}</a>
)