import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
};
declare function Button({ children, variant, className, type, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

type HeaderProps = {
    logo?: React.ReactNode;
    leftAction?: React.ReactNode;
    rightActions?: React.ReactNode[];
    className?: string;
};
declare function Header({ logo, leftAction, rightActions, className, }: HeaderProps): react_jsx_runtime.JSX.Element;

type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
};
declare function IconButton({ icon, onClick }: IconButtonProps): react_jsx_runtime.JSX.Element;

type ProductCardProps = {
    imageSrc: string;
    imageAlt: string;
    description: React.ReactNode;
    price: React.ReactNode;
    onAddToCart?: () => void;
    addToCartLabel?: string;
    className?: string;
};
declare function ProductCard({ imageSrc, imageAlt, description, price, onAddToCart, addToCartLabel, className, }: ProductCardProps): react_jsx_runtime.JSX.Element;

export { Button, Header, IconButton, ProductCard };
