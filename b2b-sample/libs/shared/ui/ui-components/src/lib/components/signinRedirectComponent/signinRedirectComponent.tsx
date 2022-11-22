/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from "react";
import { Loader } from "rsuite";
import styles from "./signinRedirectComponent.module.css";
import { SigninRedirectComponentProps } from "../../models/signinRedirectComponent/signinRedirectComponent";
import LogoComponent from "../logoComponent/logoComponent";

/**
 * Sign in redirect component
 * 
 * @param prop - loaderContent
 */
export function SigninRedirectComponent(prop: SigninRedirectComponentProps) {

    const { loaderContent } = prop;

    return (
        <div className={ styles["signinOuter"] }>
            <div className={ styles["signinInner"] }>
                <LogoComponent imageSize="medium" />
                <Loader size="lg" content={ loaderContent } vertical />
            </div>
        </div>
    );
}

export default SigninRedirectComponent;
