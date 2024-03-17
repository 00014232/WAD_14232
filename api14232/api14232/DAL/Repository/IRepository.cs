using Microsoft.AspNetCore.Mvc;

namespace api14232.DAL.Repository
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);
        Task CreateAsync(T model);
        Task<T> UpdateAsync(int id, T model);
        Task DeleteAsync(int id);
    }
}
