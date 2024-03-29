export default {
  id: 'drawing',
  label: 'Drawing',
  list: [
    {
      id: 'simple',
      label: 'Basic Drawing',
      type: 'tracing',
      lockAfter: 1,
      commonData: {
        type: 'custom',
        noPicker: true
      },
      data: [
        {
          source: [
            {
              id: 'icecream',
              paths: [
                'M 24 124 L 243 123 ',
                'M 243 123 L 129 346 L 25 122 ',
                'M 25 122 C 22 -9 247 -3 242 122'
              ],
              width: 268
            },
            {
              id: 'cube',
              paths: [
                'M 17 91 L 219 89 L 217 267 ',
                'M 217 267 L 17 265 L 17 91',
                'M 17 91 L 123 27',
                'M 219 90 L 291 30',
                'M 217 265 L 291 205',
                'M 123 27 L 293 29 L 291 205'
              ],
              width: 310
            },
            {
              id: 'cylinder',
              paths: [
                'M 40 81 C 35 9 243 1 242 85 ',
                'M 242 85 C 242 123 41 120 39 80',
                'M 39 80 L 40 251',
                'M 243 85 L 244 261',
                'M 40 251 C 45 327 243 323 244 261'
              ],
              width: 260
            },
            {
              id: 'pyramid',
              paths: [
                'M 30 196 L 139 25 L 265 199',
                'M 265 199 L 29 198',
                'M 29 198 L 25 114 L 138 25 '
              ],
              width: 275
            },
            {
              id: 'star-6',
              paths: [
                'M 12 210 L 114 20 L 206 210',
                'M 206 210 L 12 210',
                'M 13 75 L 207 74 L 101 265',
                'M 101 265 L 13 75'
              ],
              width: 220
            }
          ]
        },
        {
          source: [
            {
              id: 'moon',
              paths: [
                'M 73 35 C -3 84 17 189 72 221 C 134 265 276 231 274 153',
                'M 274 153 C 167 208 63 126 73 35 '
              ],
              width: 290
            },
            {
              id: 'mango',
              paths: [
                'M 119 68 C 29 13 -36 109 52 221 ',
                'M 52 221 C 67 245 7 234 38 277 C 70 323 207 307 232 181 C 253 65 184 37 119 69',
                'M 119 69 L 118 10'
              ],
              width: 240
            },
            {
              id: 'apple',
              paths: [
                'M 146 110 C 237 105 263 145 261 199 C 259 253 217 321 145 305',
                'M 145 305 C 51 313 27 235 29 195 C 35 135 77 104 145 110 ',
                'M 122 136 Q 145 165 175 136',
                'M 148 131 L 142 27 ',
                'M 144 68 Q 207 11 283 47 ',
                'M  283 47 Q 212 111 144 69'
              ],
              width: 300
            },
            {
              id: 'star',
              paths: [
                'M 30 103 L 275 101 L 53 277 ',
                'M 53 277 L 164 15 L 233 277 ',
                'M 233 277 L 31 102'
              ],
              width: 290
            },
            {
              id: 'kite',
              paths: [
                'M 48 23 L 152 52 L 147 183',
                'M 147 183 L 20 119 L 48 24',
                'M 48 24 L 147 183',
                'M 22 120 L 151 53',
                'M 147 183 C 172 275 278 40 288 261'
              ],
              width: 300
            }
          ]
        },
        {
          source: [
            {
              id: 'duck',
              paths: [
                'M 73 102 L 21 126 L 81 134 ',
                'M 72 101 C 65 56 118 15 147 76 C 158 107 161 155 92 200',
                'M 92 200 C 223 103 252 139 288 213 C 310 273 163 365 61 270 C 4 210 108 151 81 135 '
              ],
              width: 300
            },
            {
              id: 'tree',
              paths: [
                'M 132 137 Q 122 281 82 298 L 166 296 Q 140 222 158 147 ',
                'M 158 147 C 174 205 290 212 256 141 C 336 119 272 -28 212 75 C 213 -8 120 -3 108 87',
                'M 108 87 C 48 13 -42 116 44 135 C 6 201 138 241 131 140 '
              ],
              width: 300
            },
            {
              id: 'sun',
              paths: [
                'M 63 208 L 227 210 C 260 209 256 152 218 157 C 222 128 203 84 154 111 ',
                'M 154 111 C 120 25 28 111 79 157 C 24 149 17 208 63 208 ',
                'M 139 86 C 144 45 197 32 219 59 C 234 72 242 111 213 125 ',
                'M 147 65 L 117 43 ',
                'M 169 46 L 159 19 ',
                'M 198 45 L 201 16 ',
                'M 219 59 L 240 29 ',
                'M 228 79 L 268 72 ',
                'M 231 108 L 258 125 '
              ],
              width: 280
            },
            {
              id: 'pot',
              paths: [
                'M 159 41 C 121 131 231 78 220 177 C 205 257 34 279 25 174 ',
                'M 25 174 C 11 60 123 145 75 41 C 84 59 154 61 160 42',
                'M 160 42 C 155 10 83 11 75 43 ',
                'M 22 153 C 60 189 174 201 220 155 '
              ],
              width: 240
            },
            {
              id: 'house',
              paths: [
                'M 53 94 L 56 293 L 211 293 L 209 96 ',
                'M 88 292 L 86 189 C 86 157 141 151 146 191 L 147 293 ',
                'M 30 107 L 123 40 L 223 106 ',
                'M 123 40 L  240 9',
                'M 223 106 L 314 65 L 240 9',
                'M 211 293 L 288 203 L 294 75 '
              ],
              width: 320
            }
          ]
        },
        {
          source: [
            {
              id: 'butterfly',
              paths: [
                'M 154 85 C 189 85 181 207 157 244 ',
                'M 157 244 C 125 207 120 84 154 85',
                'M 171 100 C 224 49 277 41 278 99 C 277 173 226 197 179 161',
                'M 229 177 C 315 198 238 305 169 219',
                'M 134 101 C 57 35 11 60 24 131 C 29 162 77 189 128 157',
                'M 68 171 C 9 233 82 283 143 220',
                'M 165 89 C 169 37 191 16 213 42',
                'M 145 88 C 146 53 142 17 107 38'
              ],
              width: 290
            },
            {
              id: 'fish',
              paths: [
                'M 9 130 C 60 104 29 90 105 74 Q 170 64 224 116 ',
                'M 224 116 Q 251 117 277 84 C 270 113 269 128 275 179 Q 250 141 226 138 C 152 201 54 208 9 130 ',
                'M 99 74 Q 96 36 144 38 Q 197 46 176 82',
                'M 81 185 Q 79 217 125 219 Q 183 214 159 176',
                'M 61 89 Q 110 137 56 175'
              ],
              width: 285
            },
            {
              id: 'rocket',
              paths: [
                'M 3 21 C 63 24 166 58 214 150 L 165 204',
                'M 165 204 C 90 174 26 102 4 19',
                'M 173 94 L 265 114 L 210 144',
                'M 100 164 L 124 262 L 159 202',
                'M 175 196 L 221 207 L 206 160'
              ],
              width: 275
            },
            {
              id: 'flower',
              paths: [
                'M 85 134 C 85 62 198 64 195 140 ',
                'M 195 140 C 192 202 84 196 86 133 ',
                'M 86 133 C -11 85 77 -3 129 80 ',
                'M 129 80 C 136 -11 273 37 188 107',
                'M 188 107 C 287 79 265 224 179 171',
                'M 179 171 C 260 246 91 293 122 180',
                'M 122 180 C 59 297 -26 125 85 132 ',
                'M 119 181 C 59 287 216 277 151 380'
              ],
              width: 260
            },
            {
              id: 'lotus',
              paths: [
                'M 175 55 C 123 99 130 168 176 215',
                'M 175 55 C 175 55 251 139 178 215 ',
                'M 203 103 Q 240 97 275 57 C 279 124 247 219 178 215 ',
                'M 274 96 Q 309 88 331 56 C 339 111 329 219 177 216 ',
                'M 147 92 Q 105 95 77 57 C 77 125 95 211 177 215 ',
                'M 76 85 Q 45 87 19 52 C 14 131 56 211 177 215 ',
                'M 176 215 C 176 215 227 252 173 325 '
              ],
              width: 340
            }
          ]
        },
        {
          source: [
            {
              id: 'shape-a',
              paths: [
                'M 6 245 L 118 20 L 225 245',
                'M 225 245 L 180 244 L 150 174 L 80 175 L 50 245 L 6 245 ',
                'M 87 146 L 144 145 L 116 86 ',
                'M  116 86 L 88 147 '
              ],
              width: 230
            },
            {
              id: 'shape-b',
              paths: [
                'M 27 243 L 24 21 C 88 19 133 55 135 81 C 136 129 92 140 81 139',
                'M 81 139 C 100 139 131 165 131 204 C 128 247 73 249 27 245',
                'M 57 109 L 55 59 ',
                'M 55 59 Q 93 58 99 83 Q 103 107 56 107 ',
                'M 56 214 L 54 164 ',
                'M 54 164 Q 92 163 98 188 Q 102 212 55 212 '
              ],
              width: 140
            },
            {
              id: 'shape-s',
              paths: [
                'M 190 21 L 26 20 L 29 158 L 143 160 L 143 201 L 29 202 L 30 243',
                'M 30 243 L 192 245 L 190 112 L 69 110 L 69 66 L 189 65 L 189 21'
              ],
              width: 200
            },
            {
              id: 'shape-n',
              paths: [
                'M 27 19 L 28 243 L 75 245 L 76 107 L 179 244 L 220 244',
                'M 220 244 L 219 20 L 167 20 L 169 153 L 78 21 L 27 21'
              ],
              width: 230
            },
            {
              id: 'shape-x',
              paths: [
                'M 15 41 L 69 41 L 130 109 L 186 39 L 245 39 L 163 141 L 251 243',
                'M 251 243 L 192 243 L 130 171 L 69 245 L 15 246 L 101 144 L 14 41 '
              ],
              width: 255
            }
          ]
        }
      ]
    }
  ]
};
