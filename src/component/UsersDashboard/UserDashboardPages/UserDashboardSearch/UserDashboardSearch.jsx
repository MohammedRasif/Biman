import React, { useState } from 'react';
import UserDashboardNavbar from '../../UserDashboardNavbar/UserDashboardNavbar';
import AllRecipes from '../AllRecipes/AllRecipes';


function UserDashboardSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <UserDashboardNavbar setSearchQuery={setSearchQuery} />
      <AllRecipes searchQuery={searchQuery} />
    </div>
  );
}

export default UserDashboardSearch;