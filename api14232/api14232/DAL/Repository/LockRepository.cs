using api14232.DAL.Context;
using api14232.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api14232.DAL.Repository
{
    public class LockRepository : IRepository<Lock>
    {
        private MainDbContext _context;

        public LockRepository(MainDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Lock model)
        {
            await _context.Locks.AddAsync(model);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var foundLock = await GetByIdAsync(id);
            if(foundLock != null)
            {
                _context.Locks.Remove(foundLock);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Lock>> GetAllAsync()
        {
            return await _context.Locks.ToListAsync();
        }

        public async Task<Lock?> GetByIdAsync(int id)
        {
            return await _context.Locks.FirstOrDefaultAsync(l => l.Id == id);
        }

        public async Task<Lock> UpdateAsync(int id, Lock model)
        {
            var foundLock = await GetByIdAsync(id);
            if(foundLock != null)
            {
                _context.Entry(foundLock).State = EntityState.Modified;
                foundLock.Code = model.Code;
                await _context.SaveChangesAsync();
            }
            return await _context.Locks.FirstAsync(l => l.Id == id);
        }
    }
}
