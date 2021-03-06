// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// ------------------------------------------------------------------------------

export namespace BaseGUID {
    export const GUIDRegexElement = `(([a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12})|([a-f0-9]{32}))`;
    export const GUIDRegex = `(\\b${GUIDRegexElement}\\b|\\{${GUIDRegexElement}\\}|urn:uuid:${GUIDRegexElement}\\b|%7[b]${GUIDRegexElement}%7[d]|[x]\\'${GUIDRegexElement}\\')`;
}
