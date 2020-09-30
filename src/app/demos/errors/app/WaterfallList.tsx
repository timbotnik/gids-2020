import React, { useState } from "react";
import { gql, useQuery, ApolloError } from "@apollo/client";
import { WaterfallListQuery4 } from "lib/graphql/types";
import {
  WaterfallListItem,
  waterfallListItemFragment,
} from "./waterfallList/WaterfallItem";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { Button } from "@apollo/space-kit/Button";
import { colors } from "@apollo/space-kit/colors";

const waterfallListQuery = gql`
  query WaterfallListQuery4 {
    waterfalls {
      ...WaterfallListItemFragment
    }
  }
  ${waterfallListItemFragment}
`;

export function WaterfallList() {
  const [error, setError] = useState<ApolloError | null>(null);
  const { data, loading } = useQuery<WaterfallListQuery4>(waterfallListQuery);
  return loading ? (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="overflow-y-auto">
      {error && (
        <div className="bg-red-400 flex items-center justify-center h-12 text-white italic relative">
          uh oh, try again
          <Button
            className="absolute right-0 mr-2"
            color={colors.red.base}
            onClick={() => setError(null)}
          >
            Dismiss
          </Button>
        </div>
      )}
      {data?.waterfalls.map((waterfall) => (
        <WaterfallListItem
          key={waterfall.id}
          waterfall={waterfall}
          onError={(err) => setError(err)}
        />
      ))}
    </div>
  );
}
