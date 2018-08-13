import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import {
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";

import helpers from "../../utils/helpers";

class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            personalhistory: "",
            familyhistory: "",
            signs: "",
            location: "",
            travels: "",
            age: "",
            weight: "",
            height: "",
            tempcurr: "",
            heartrate: "",
            respiratoryrate: "",
            bloodpressure: "",
            oxygensaturation: "",
            findings: "",
            symptoms: "",
            sodium: "",
            potassium: "",
            chlorine: "",
            bicarb: "",
            bun: "",
            platelets: "",
            creatinine: "",
            wbc: "",
            hct: "",
            hepatic: "",
            kidney: "",
            lipids: "",
            specials: "",
            glucose: "",
            xray: "",
            ctscan: "",
            mri: "",
            ultrasound: "",
            pet: "",
            diagnosis: "",
            daysintreatment: "",
            drugsintreatment: "",
            proceduresintreatment: ""
        };

    }
    componentDidMount() {
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    preventDefault = e => {
        e.preventDefault();
    };

    formSubmit = () => {
        // console.log(this)
        helpers
            .savePatient(this)
            // this.state.reset()
            // this.state.reset()
            .then(res => {
                console.log("create item", res);
                this.setState({
                    name: "",
                    gender: "",
                    personalhistory: "",
                    familyhistory: "",
                    signs: "",
                    location: "",
                    travels: "",
                    age: "",
                    weight: "",
                    height: "",
                    tempcurr: "",
                    heartrate: "",
                    respiratoryrate: "",
                    bloodpressure: "",
                    oxygensaturation: "",
                    findings: "",
                    symptoms: "",
                    sodium: "",
                    potassium: "",
                    chlorine: "",
                    bicarb: "",
                    bun: "",
                    platelets: "",
                    creatinine: "",
                    wbc: "",
                    hct: "",
                    hepatic: "",
                    kidney: "",
                    lipids: "",
                    specials: "",
                    glucose: "",
                    xray: "",
                    ctscan: "",
                    mri: "",
                    ultrasound: "",
                    pet: "",
                    diagnosis: "",
                    daysintreatment: "",
                    drugsintreatment: "",
                    proceduresintreatment: "",
                    create: true
                });
            })
            .catch(err => {
                this.setState({
                    name: "",
                    gender: "",
                    personalhistory:"",
                    familyhistory: "",
                    signs: "",
                    location: "",
                    travels: "",
                    age: "",
                    weight: "",
                    height: "",
                    tempcurr: "",
                    heartrate: "",
                    respiratoryrate: "",
                    bloodpressure: "",
                    oxygensaturation: "",
                    findings: "",
                    symptoms: "",
                    sodium: "",
                    potassium: "",
                    chlorine: "",
                    bicarb: "",
                    bun: "",
                    platelets: "",
                    creatinine: "",
                    wbc: "",
                    hct: "",
                    hepatic: "",
                    kidney: "",
                    lipids: "",
                    specials: "",
                    glucose: "",
                    xray: "",
                    ctscan: "",
                    mri: "",
                    ultrasound: "",
                    pet: "",
                    diagnosis: "",
                    daysintreatment: "",
                    drugsintreatment: "",
                    proceduresintreatment: "",
                    create: false
                });
            });
    };


    tt = () => {
        this.formSubmit();
        alert("Patient Case Saved and Shared");
        // console.log(this)
    };

    render() {
        return (
            <div>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title
                            className="logo"
                            componentClass="h3"
                            onClick={this.handleClick}
                        >
                            Patient
            </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={this.preventDefault}>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the fullname of the patient?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    name="name"
                                    placeholder="(John Smith)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="formBasicText">
                                <ControlLabel>What is the gender of the patient?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.gender}
                                    name="gender"
                                    placeholder="(Male, Female, Transgender...)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's personal medical history?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.personalhistory}
                                    name="personalhistory"
                                    placeholder="(Married man living with family but traveling often, no surgeries or allergies, no chronic disease, addictions, or phsychiatric history.)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's family medical history?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.familyhistory}
                                    name="familyhistory"
                                    placeholder="(No cancer or chronic disease in family, no addicts or phsychiatric patients.)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What are the patient's medical signs?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.signs}
                                    name="signs"
                                    placeholder="(No rashes, normal skin and eyes pigmentation.)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How old is the patient?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.age}
                                    name="age"
                                    placeholder="(30)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's weight (lbs)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.weight}
                                    name="weight"
                                    placeholder="(150)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How tall is the patient (ft)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.height}
                                    name="height"
                                    placeholder="(5'9)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's body temperature (F)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.tempcurr}
                                    name="tempcurr"
                                    placeholder="(99)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's heart rate in beats per minute (bpm)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.heartrate}
                                    name="heartrate"
                                    placeholder="(60)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's respitaroty rate in breaths per minute (bpm)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.respiratoryrate}
                                    name="respiratoryrate"
                                    placeholder="(16)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's blood pressure (mm Hg)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.bloodpressure}
                                    name="bloodpressure"
                                    placeholder="(120/80)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How's the patient oxygen saturation (%)?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.oxygensaturation}
                                    name="oxygensaturation"
                                    placeholder="(98)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What are the patient's symptoms?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.symptoms}
                                    name="symptoms"
                                    placeholder="(Headache, Pain in extremities, Insomnia...)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Where there any relevant findings in the patient's physical examination?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.findings}
                                    name="findings"
                                    placeholder="(No strange lumps in organs, or deformities found...)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Where does the patient live?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.location}
                                    name="location"
                                    placeholder="(San Francisco, CA, USA)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Where has the patient travelled to recently?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.travels}
                                    name="travels"
                                    placeholder="(Sydney, Australia)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Sodium (Na) Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.sodium}
                                    name="sodium"
                                    placeholder="(134 - 145)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Potassium (K) Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.potassium}
                                    name="potassium"
                                    placeholder="(3.5 - 5.0)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Chloride (Cl) Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.chlorine}
                                    name="chlorine"
                                    placeholder="(95 - 105)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Bicarbonate (HCO3-) Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.bicarb}
                                    name="bicarb"
                                    placeholder="(18 - 23)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Blood Urea Nitrogen Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.bun}
                                    name="bun"
                                    placeholder="(3.0 - 7.0)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Platelet Count Lab Results (x10^9/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.platelets}
                                    name="platelets"
                                    placeholder="(140 - 450)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Creatinine Lab Results (μmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.creatinine}
                                    name="creatinine"
                                    placeholder="(male: 60 - 90, female: 50 - 90)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's White Blood Cell Count Lab Results (x10^9/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.wbc}
                                    name="wbc"
                                    placeholder="(adult: 3.5 - 9.0, newborn: 9 - 30, 1yrold: 6-18)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Hematocrit Lab Results (%):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.hct}
                                    name="hct"
                                    placeholder="(male: 0.39 - 0.50, female: 0.35 - 0.46, child: 0.31-0.43)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Hepatic Functionality (ALT/AST) Lab Results (µkat/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.hepatic}
                                    name="hepatic"
                                    placeholder="(ALT = male: 0.15 - 1.1, female: 0.15 - 0.75, AST = male: 0.25 - 0.60, female: 0.25 - 0.75)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Kidney Functionslity (GFR) Lab Results (mL/min/1.73 m2):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.kidney}
                                    name="kidney"
                                    placeholder="(90 - 120)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Lipids (TC, HDL, LDL, TG) Lab Results (mg/dL):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.lipids}
                                    name="lipids"
                                    placeholder="(TC = 20 and younger: 75 - 169, 21 and older: 100 - 199, HDL > 40, LDL = very high risk patient: <70, high risk patient: <100, low risk patient: <130, TG < 150)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Plasma Glucose (fasting) Lab Results (mmol/L):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.glucose}
                                    name="glucose"
                                    placeholder="(3.8 - 6.1)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Specials Lab Results:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.specials}
                                    name="specials"
                                    placeholder="(Infectous diseases: negative, stds: negative ...)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's X-Ray Images (link):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.xray}
                                    name="xray"
                                    placeholder="(https://docs.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's CT-Scan Images (link):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.ctscan}
                                    name="ctscan"
                                    placeholder="(https://docs.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's MRI Images (link):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.mri}
                                    name="mri"
                                    placeholder="(https://docs.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's Ultrasound Images (link):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.ultrasound}
                                    name="ultrasound"
                                    placeholder="(https://docs.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Patient's PET/CT Images (link):</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.pet}
                                    name="pet"
                                    placeholder="(https://docs.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>What is the patient's diagnosis?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.diagnosis}
                                    name="diagnosis"
                                    placeholder="(Malaria)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Will the patient be prescribed any drugs for medical treatment?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.drugsintreatment}
                                    name="drugsintreatment"
                                    placeholder="(Ceftriaxone)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>How many days will the patient be in treatment?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.daysintreatment}
                                    name="daysintreatment"
                                    placeholder="(7 Days)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Does the patient's treatment include any procedures or surgeries?</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.proceduresintreatment}
                                    name="proceduresintreatment"
                                    placeholder="(Laparoscopic Abdominal Surgery)"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button
                                className="btn btn-info"
                                type="button"
                                onClick={this.tt}
                            >
                                Submit
              </Button>
                        </form>
                    </Panel.Body>
                </Panel>
            </div >
        );
    }
}

export default PatientForm;