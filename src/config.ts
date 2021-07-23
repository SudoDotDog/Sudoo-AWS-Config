/**
 * @author WMXPY
 * @namespace AWSConfig
 * @description Config
 */

export class AWSConfig {

    private static _instance: AWSConfig | null = null;

    public static getInstance(): AWSConfig {
        if (!this._instance) {
            this._instance = new AWSConfig();
        }
        return this._instance;
    }

    private _initiated: boolean;

    private constructor() {

        this._initiated = false;
    }
}
