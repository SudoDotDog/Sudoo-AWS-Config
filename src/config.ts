/**
 * @author WMXPY
 * @namespace AWSConfig
 * @description Config
 */

import * as AWS from "aws-sdk";
import { AWSConfigUpdateFunction, AWSUpdateConfig } from "./declare";

export class AWSConfig {

    private static _instance: AWSConfig | null = null;

    public static getInstance(): AWSConfig {
        if (!this._instance) {
            this._instance = new AWSConfig();
        }
        return this._instance;
    }

    private _initiated: boolean;

    private _updateFunction?: AWSConfigUpdateFunction;

    private constructor() {

        this._initiated = false;
    }

    public declareUpdateFunction(updateFunction: AWSConfigUpdateFunction): this {

        this._updateFunction = updateFunction;
        return this;
    }

    public update(): boolean {

        if (this._initiated) {
            return true;
        }

        if (typeof this._updateFunction !== 'function') {
            return false;
        }

        const config: AWSUpdateConfig = this._updateFunction();
        AWS.config.update(config);

        this._initiated = true;
        return true;
    }

    public check(): boolean {

        return this._initiated;
    }

    public ensure(error?: Error): void {

        if (!this.check()) {

            if (typeof error === 'undefined') {

                throw new Error('[Sudoo-AWS-Config] Initialize check failed');
            }
            throw error;
        }
        return;
    }
}
