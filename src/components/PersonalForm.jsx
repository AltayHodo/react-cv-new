export default function PersonalForm(){

  return (
    <>
      <form action="">
        <label htmlFor="full-name">Full name</label>
        <input type="text" id="full-name" placeholder="First and last name" name="full-name"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email" name="email"/>
        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" placeholder="Enter phone number" name="phone" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="City, Country" name="address" />
      </form>
    </>
  )
}

