/**
 * @author WMXPY
 * @namespace AWSConfig
 * @description Declare
 */

import * as AWS from "aws-sdk";
import { APIVersions } from "aws-sdk/lib/config";
import { ConfigurationServicePlaceholders } from "aws-sdk/lib/config_service_placeholders";

export type AWSUpdateConfig =
    AWS.ConfigurationOptions
    & ConfigurationServicePlaceholders
    & APIVersions;

export type AWSConfigUpdateFunction = () => AWSUpdateConfig | null;
