/// <reference path="../../../typings/main.d.ts" />

module SchemaTypes {
    export interface GenericDoc {
        id: string;
    }

    export interface User extends GenericDoc {
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        username: string;
        nickname: string;
        title: string;
    }

    export interface Event extends GenericDoc {
        name: string;
        location: string;
        startDate: Date;
        endDate: Date;
    }

    export interface IdeaLike extends GenericDoc {
        userId: string;
    }

    export interface IdeaUpdate extends GenericDoc {
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface IdeaComment extends GenericDoc {
        parentId: string;
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface IdeaBack extends GenericDoc {
        text: string;
        authorId: string;
        types: Array<string>;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface Idea extends GenericDoc {
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
