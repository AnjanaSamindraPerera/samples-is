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

import React, { useState } from "react";
import { Modal, Panel, Steps } from "rsuite";
import styles from "../../../../../../../styles/Settings.module.css";

export default function CreateRoleComponent() {

    const [step, setStep] = useState(0);

    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    const onNext = () => onChange(step + 1);

    const onPrevious = () => onChange(step - 1);

    const roleItemDetailsComponent = (activeKey) => {
        switch (activeKey) {
            case "1":

                return <General session={ session } roleDetails={ roleDetails } fetchData={ fetchData } />;
            case "2":

                return <Permission session={ session } roleDetails={ roleDetails } fetchData={ fetchData } />;
            case "3":

                return <Users session={ session } roleDetails={ roleDetails } fetchData={ fetchData } />;
            case "4":

                return <JsonDisplay jsonObject={ roleDetails } />;
        }
    };

    return (
        <Modal backdrop="static" role="alertdialog" open={true} size="md">
            <Modal.Header>
                <Modal.Title>
                    <b>Create Role</b>
                    <p>Create a new role in the system.</p>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Steps current={step} small>
                    <Steps.Item title="Basic Details" />
                    <Steps.Item title="Permission Selection" />
                    <Steps.Item title="Users Selection" />
                </Steps>
                <div className={styles.addUserMainDiv}>
                    <Panel bordered>

                        sdads

                    </Panel>
                </div>
            </Modal.Body>
        </Modal>
    )
}
