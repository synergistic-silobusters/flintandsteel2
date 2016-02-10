/// <reference path="../../typings/main.d.ts" />

module SchemaTypes {
    export class GenericDoc {
        id: string;
    }

    export class User extends GenericDoc {
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        username: string;
        nickname: string;
        title: string;
    }

    export class Event extends GenericDoc {
        name: string;
        location: string;
        startDate: Date;
        endDate: Date;
    }

    export class IdeaLike extends GenericDoc {
        userId: string;
    }

    export class IdeaUpdate extends GenericDoc {
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export class IdeaComment extends GenericDoc {
        parentId: string;
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export class IdeaBack extends GenericDoc {
        text: string;
        authorId: string;
        types: Array<string>;
        timeCreated: Date;
        timeModified: Date;
    }

    export class Idea extends GenericDoc {
        title: string;
        authorId: string;
        description: string;
        eventId: string;
        timeCreated: Date;
        timeModified: Date;
        tags: Array<string>;
        rolereqs: Array<string>;
        likes: Array<IdeaLike>;
        updates: Array<IdeaUpdate>;
        comments: Array<string>;
        backs: Array<IdeaBack>
    }
}

export = SchemaTypes;
