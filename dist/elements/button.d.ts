import { Page } from "@playwright/test";
export declare function getButton(page: Page, buttonName: string): Promise<void>;
export declare function getButtonPartialMatch(page: Page, buttonName: string): Promise<void>;
export declare function clickButton(page: Page, buttonName: string): Promise<void>;
export declare function clickButtonPartialMatch(page: Page, buttonName: string): Promise<void>;
export declare function hoverButton(page: Page, buttonName: string): Promise<void>;
export declare function hoverButtonPartialMatch(page: Page, buttonName: string): Promise<void>;
export declare function scrollToButton(page: Page, buttonName: string): Promise<void>;
export declare function scrollToButtonPartialMatch(page: Page, buttonName: string): Promise<void>;
