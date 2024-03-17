namespace api14232.DAL.Models
{
    public class Key
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int Quantity { get; set; }
        public Lock Lock { get; set; }
    }
}
