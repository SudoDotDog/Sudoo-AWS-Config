/**
 * @author WMXPY
 * @namespace AWSConfig
 * @description Config
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { AWSConfig } from "../../src/config";

describe('Given {AWSConfig} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('aws-config-config');

    it('should be able to get global instance', (): void => {

        const instance: AWSConfig = AWSConfig.getInstance();

        expect(instance).to.be.an.instanceof(AWSConfig);
    });
});
