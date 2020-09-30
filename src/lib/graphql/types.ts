/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavQuery4
// ====================================================

export interface NavQuery4_me {
  __typename: "User";
  id: string;
  avatarUrl: string;
}

export interface NavQuery4 {
  me: NavQuery4_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WaterfallListQuery4
// ====================================================

export interface WaterfallListQuery4_waterfalls {
  __typename: "Waterfall";
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  likes: number;
}

export interface WaterfallListQuery4 {
  waterfalls: WaterfallListQuery4_waterfalls[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeWaterfallWithErrorMutation
// ====================================================

export interface LikeWaterfallWithErrorMutation_likeWaterfallWithError {
  __typename: "Waterfall";
  id: string;
  likes: number;
}

export interface LikeWaterfallWithErrorMutation {
  likeWaterfallWithError: LikeWaterfallWithErrorMutation_likeWaterfallWithError | null;
}

export interface LikeWaterfallWithErrorMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavQuery2
// ====================================================

export interface NavQuery2_me {
  __typename: "User";
  id: string;
  avatarUrl: string;
}

export interface NavQuery2 {
  me: NavQuery2_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WaterfallListQuery2
// ====================================================

export interface WaterfallListQuery2_waterfalls {
  __typename: "Waterfall";
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  likes: number;
}

export interface WaterfallListQuery2 {
  waterfalls: WaterfallListQuery2_waterfalls[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavQuery3
// ====================================================

export interface NavQuery3_me {
  __typename: "User";
  id: string;
  avatarUrl: string;
}

export interface NavQuery3 {
  me: NavQuery3_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WaterfallListQuery3
// ====================================================

export interface WaterfallListQuery3_waterfalls {
  __typename: "Waterfall";
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  likes: number;
}

export interface WaterfallListQuery3 {
  waterfalls: WaterfallListQuery3_waterfalls[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeWaterfallMutation
// ====================================================

export interface LikeWaterfallMutation_likeWaterfall {
  __typename: "Waterfall";
  id: string;
  likes: number;
}

export interface LikeWaterfallMutation {
  likeWaterfall: LikeWaterfallMutation_likeWaterfall | null;
}

export interface LikeWaterfallMutationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NavQuery
// ====================================================

export interface NavQuery_me {
  __typename: "User";
  id: string;
  avatarUrl: string;
}

export interface NavQuery {
  me: NavQuery_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WaterfallListQuery
// ====================================================

export interface WaterfallListQuery_waterfalls {
  __typename: "Waterfall";
  id: string;
}

export interface WaterfallListQuery {
  waterfalls: WaterfallListQuery_waterfalls[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WaterfallListItemQuery
// ====================================================

export interface WaterfallListItemQuery_waterfall {
  __typename: "Waterfall";
  id: string;
  name: string;
  country: string;
  imageUrl: string;
}

export interface WaterfallListItemQuery {
  waterfall: WaterfallListItemQuery_waterfall | null;
}

export interface WaterfallListItemQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WaterfallListItemFragment
// ====================================================

export interface WaterfallListItemFragment {
  __typename: "Waterfall";
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  likes: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
