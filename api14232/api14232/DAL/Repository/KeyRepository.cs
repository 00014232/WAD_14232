using api14232.DAL.Context;
using api14232.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api14232.DAL.Repository
{
    public class KeyRepository : IRepository<Key>
    {
        private MainDbContext _context;

        public KeyRepository(MainDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Key model)
        {
            var foundLock = await _context.Locks.FirstOrDefaultAsync(l => l.Id == model.Lock.Id);
            if (foundLock != null)
            {
                model.Lock = foundLock;
            }
            await _context.AddAsync(model);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var key = await GetByIdAsync(id);
            if (key != null)
            {
                _context.Keys.Remove(key);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Key>> GetAllAsync()
        {
            return await _context.Keys.Include(k => k.Lock).ToListAsync();
        }

        public async Task<Key?> GetByIdAsync(int id)
        {
            return await _context.Keys.Include(k => k.Lock).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Key> UpdateAsync(int id, Key model)
        {
            var key = await GetByIdAsync(id);
            if (key != null)
            {
                var foundLock = await _context.Locks.FirstOrDefaultAsync(l => l.Id == model.Lock.Id);
                _context.Entry(key).State = EntityState.Modified;
                key.Code = model.Code;

                if(foundLock != null)
                {
                    key.Lock = foundLock;
                }
                key.Quantity = model.Quantity;

                await _context.SaveChangesAsync();
            }
            return await _context.Keys.FirstAsync(x => x.Id == id);
        }
    }
}
