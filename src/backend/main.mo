import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  // Type definitions
  type Service = {
    title : Text;
    description : Text;
    icon : Text; // Path to an icon asset
  };

  type TeamMember = {
    name : Text;
    role : Text;
    photo : Text; // Path to a photo asset
  };

  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
  };

  // Persistent storage
  let services = Map.empty<Text, Service>();
  let teamMembers = Map.empty<Text, TeamMember>();
  let contactForms = Map.empty<Nat, ContactForm>();

  var nextContactFormId = 0;

  // Service comparison module
  module Service {
    public func compare(s1 : Service, s2 : Service) : Order.Order {
      switch (Text.compare(s1.title, s2.title)) {
        case (#equal) { Text.compare(s1.description, s2.description) };
        case (order) { order };
      };
    };
  };

  // TeamMember comparison module
  module TeamMember {
    public func compare(tm1 : TeamMember, tm2 : TeamMember) : Order.Order {
      switch (Text.compare(tm1.role, tm2.role)) {
        case (#equal) { Text.compare(tm1.name, tm2.name) };
        case (order) { order };
      };
    };
  };

  // Add service
  public shared ({ caller }) func addService(title : Text, description : Text, icon : Text) : async () {
    let service : Service = {
      title;
      description;
      icon;
    };
    services.add(title, service);
  };

  // Add team member
  public shared ({ caller }) func addTeamMember(name : Text, role : Text, photo : Text) : async () {
    let member : TeamMember = {
      name;
      role;
      photo;
    };
    teamMembers.add(name, member);
  };

  // Get all services
  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray().sort();
  };

  // Get all team members
  public query ({ caller }) func getAllTeamMembers() : async [TeamMember] {
    teamMembers.values().toArray().sort();
  };

  // Submit contact form
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("Please fill out all fields.");
    };
    let contactForm : ContactForm = {
      name;
      email;
      message;
    };
    contactForms.add(nextContactFormId, contactForm);
    nextContactFormId += 1;
  };

  // Get all contact forms
  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray();
  };
};
