/// <reference path="../../../typings/main.d.ts" />

module SchemaTypes {
    export interface User {
        id: string;
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        username: string;
        nickname: string;
        title: string;
    }

    export interface Event {
        id: string;
        name: string;
        location: string;
        startDate: Date;
        endDate: Date;

    }

    export interface IdeaLike {
        id: string;
        userId: string;
    }

    export interface IdeaUpdate {
        id: string;
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface IdeaComment {
        id: string;
        parentId: string;
        text: string;
        authorId: string;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface IdeaBack {
        id: string;
        text: string;
        authorId: string;
        types: Array<string>;
        timeCreated: Date;
        timeModified: Date;
    }

    export interface Idea {
        id: string;
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
