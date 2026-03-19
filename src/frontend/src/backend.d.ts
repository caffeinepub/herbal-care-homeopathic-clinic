import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TeamMember {
    name: string;
    role: string;
    photo: string;
}
export interface Service {
    title: string;
    icon: string;
    description: string;
}
export interface ContactForm {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    addService(title: string, description: string, icon: string): Promise<void>;
    addTeamMember(name: string, role: string, photo: string): Promise<void>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllServices(): Promise<Array<Service>>;
    getAllTeamMembers(): Promise<Array<TeamMember>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
