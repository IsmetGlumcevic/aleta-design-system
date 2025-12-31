import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
};
declare function Button({ children, variant }: ButtonProps): react_jsx_runtime.JSX.Element;

type HeaderProps = {
    logo?: React.ReactNode;
    leftAction?: React.ReactNode;
    rightActions?: React.ReactNode[];
};
declare function Header({ logo, leftAction, rightActions, }: HeaderProps): react_jsx_runtime.JSX.Element;

type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
};
declare function IconButton({ icon, onClick }: IconButtonProps): react_jsx_runtime.JSX.Element;

export { Button, Header, IconButton };
