function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p> waad login garaysantahay!</p> : <p>fadlan login garay.</p>}
       {isLoggedIn ? <p>yes true</p> : <p>no false</p>}
          


      </div>
      
  );
}
export default Dashboard;
