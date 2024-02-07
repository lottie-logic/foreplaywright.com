import { Page } from "@playwright/test";
export declare function getText(page: Page, text: string): Promise<void>;
export declare function getTextPartialMatch(page: Page, text: string): Promise<void>;
export declare function clickText(page: Page, text: string): Promise<void>;
export declare function clickTextPartialMatch(page: Page, text: string): Promise<void>;
export declare function hoverText(page: Page, textName: string): Promise<void>;
export declare function hoverTextPartialMatch(page: Page, textName: string): Promise<void>;
export declare function scrollToText(page: Page, textContent: string): Promise<void>;
export declare function scrollToTextPartialMatch(page: Page, textContent: string): Promise<void>;
