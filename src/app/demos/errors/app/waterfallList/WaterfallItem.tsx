import React from "react";
import classnames from "classnames";
import { gql, useMutation, ApolloError } from "@apollo/client";
import {
  WaterfallListItemFragment,
  LikeWaterfallWithErrorMutation,
  LikeWaterfallWithErrorMutationVariables,
} from "lib/graphql/types";
import { Button } from "@apollo/space-kit/Button";
import { IconLike } from "@apollo/space-kit/icons/IconLike";

interface Props {
  waterfall: WaterfallListItemFragment;
  onError: (error: ApolloError) => void;
}

export const waterfallListItemFragment = gql`
  fragment WaterfallListItemFragment on Waterfall {
    id
    name
    country
    imageUrl
    likes
  }
`;

const likeWaterfallMutation = gql`
  mutation LikeWaterfallWithErrorMutation($id: ID!) {
    likeWaterfallWithError(id: $id) {
      id
      likes
    }
  }
`;

export function WaterfallListItem({ waterfall, onError }: Props) {
  const [mutate] = useMutation<
    LikeWaterfallWithErrorMutation,
    LikeWaterfallWithErrorMutationVariables
  >(likeWaterfallMutation, {
    optimisticResponse: {
      likeWaterfallWithError: {
        id: waterfall.id,
        __typename: "Waterfall",
        likes: waterfall.likes + 1,
      },
    },
    onError: (mutationError) => onError(mutationError),
  });
  return (
    <div className="h-12 border-b border-gray-300 m-2 p-2 flex items-center justify-between">
      <img
        className="w-10 h-10 bg-gray-500"
        src={`${waterfall.imageUrl}`}
        alt={`${waterfall.name}`}
      />
      <div className="flex-1 ml-4">
        <div>{waterfall.name}</div>
        <div className="text-gray-500 text-sm">{waterfall.country}</div>
      </div>

      <Button
        feel="flat"
        icon={
          <IconLike
            className={classnames(waterfall.likes > 0 && "text-indigo-400")}
          />
        }
        onClick={() => {
          mutate({ variables: { id: waterfall.id } });
        }}
      >
        <span className="ml-2">{waterfall.likes}</span>
      </Button>
    </div>
  );
}
