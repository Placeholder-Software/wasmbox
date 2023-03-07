import React from 'react';

export const Discord = ({children}) => (
    <a href="https://discord.gg/3RtDa2M9Bx">{children ?? "Discord"}</a>
);

export const IssueTracker = ({children}) => (
    <a href="https://github.com/Placeholder-Software/wasmbox/issues">{children ?? "Issue Tracker"}</a>
);

export const AssetStore = ({children}) => (
    <a href="todo:link-asset-store">{children ?? "Unity Asset Store"}</a>
);