import React from "react";
import { gql, useQuery } from "@apollo/client";
import { NavQuery3 } from "lib/graphql/types";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

const navQuery = gql`
  query NavQuery3 {
    me {
      id
      avatarUrl
    }
  }
`;

export function Nav() {
  const { data, loading } = useQuery<NavQuery3>(navQuery);
  return (
    <nav className="flex-shrink-0 h-12 bg-indigo-900 text-white flex items-center justify-center relative">
      <div>Waterfall Chaser</div>
      {loading ? (
        <LoadingSpinner size="small" className="absolute right-0 mr-5" />
      ) : (
        <img
          className="absolute right-0 rounded-full w-8 h-8 mr-5"
          alt="User Avatar"
          src={`${data?.me.avatarUrl}`}
        />
      )}
    </nav>
  );
}
